import { IResolvers, FilterRootFields } from 'graphql-tools';
import Places from './schemas/Place';
import Posts from './schemas/Posts';

const resolverMap: IResolvers = {
    Query: {
        Hello(_:void, args: void){
            return "Hello";
        },
        /*
         * getFilteredPlace Query
         */
        getFilteredPlaces: async(_: void, { category, price, 
            distance, checked, currentX, currentY }) => {
            console.debug("Query: getFilteredPlace");
            const earthR = 6371;

            // 1. query mongodb with category
            // cons categoryResult = await Places.find({p_category: ?})
            const result = await Places.find();
            
            // 2. select palce to calculate distance
            const distanceResult = result.filter(place => {
                const dLat = (place.get("p_x")-currentX) * (Math.PI/180);
                const dLon = (place.get("p_y")-currentY) * (Math.PI/180);
                const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(place.get("p_x") 
                    * (Math.PI/180)) * Math.cos(currentX * (Math.PI/180)) 
                    * Math.sin(dLon/2) * Math.sin(dLon/2);
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
                var d = earthR * c; // Distance in km
                
                return Math.round(d*1000) < distance;
            })

            // 3. select menu with price arg
            const dmResult = distanceResult.filter((place, index) => {
                const menu: [] = place.get("menu");

                // const filteredMenu = menu.forEach((m: Object) => {
                const filteredMenu = menu.filter((m: Object) => {
                    const iPrice = (<{m_price: String}>m).m_price === ''? Number(price) + 1 :
                         (<{m_price: String}>m).m_price.replace(/[^0-9]/g,'')

                    return Number(price) >= Number(iPrice)  
                })
                
                //console.log(filteredMenu);
                //console.log(filteredMenu.length);

                // 가격에 맞는 메뉴가 없으면 지움
                if(!filteredMenu.length)
                    return false;
                    
                else{
                    place.set({ menu: filteredMenu.slice(0, 5) })
                    return true;
                }
            })

            return dmResult;
        },
        getPlace: async (_:void, { id }) => {
            console.debug("Query: getPlace");
            const result = await Places.findOne({ p_id: id });

            console.log(result);
            return result;
        },
        /*
         * getPosts Query
         */
        getPosts: async(_: void, args: void) => {
            console.debug("Query: getPosts");
            const result = Posts.find();
            result.map(val => {
                return val
            })
            return result;
        },
        /*
         * getPosts Query
         */
        getPost: async(_: void, { id }) => {
            console.debug("Query: getPost");
            const result = await Posts.findOne({_id: id});
            const updateResult = await Posts.findOneAndUpdate({ _id: id}, { c_views: result!.get("c_views") + 1}, {new: true})
            
            return updateResult;
        }
    },
    Mutation: {
        createPost: async (root, args) => {
            console.debug("Mutation: createPost");

            const Post = new Posts({
                c_title: args.title,
                c_content: args.content,
            });
            
            const result = await Post.save();
            console.log(result);
            return result;
        },
        /*
        updatePost: async (root, args) => {
            console.debug("Mutation: updatePost");
            

        },*/
        deletePost: async (root, { id }) => {
            console.debug("Mutation: deietePost");

            const result = await Posts.findOneAndDelete({ _id: id });
            console.log(result);

            return { result: true };
        },
        addLikes: async (root, { id }) => {
            console.debug("Mutation: addLikes");

            const result = await Posts.findOne({ _id: id });
            const likeResult = await Posts.findOneAndUpdate({ _id: id}, { c_likes: result!.get("c_likes") + 1}, {new: true})

            return likeResult; 
        },
    }
};

export default resolverMap;