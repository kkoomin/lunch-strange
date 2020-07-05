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
            
            const CATEGORY = ["한식", "양식", "중식", "일식", "분식"];

            let result;
            // 1. query mongodb with category
            if(category.includes("기타")){
                const filteredCategory = CATEGORY.filter((cate, index) => {
                    if(category.includes(cate))
                        return false;
                    else
                        return true; 
                })

                result = await Places.find({ p_category: { $nin: filteredCategory }});
            }
            else 
                result = await Places.find({ p_category: { $in: category } });
            
            // 2. select palce to calculate distance
            const distanceResult = result.filter(place => {
                const dLat = Math.abs(place.get("p_x")-currentX) * (Math.PI/180);
                const dLon = Math.abs(place.get("p_y")-currentY) * (Math.PI/180);
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
            console.log("Query: getPlace");
            const result = await Places.findOne({ p_id: id });

            console.log(result);
            return result;
        },
        /*
         * getPosts Query
         */
        getPosts: async(_: void, args: void) => {
            console.log("Query: getPosts");
            const result = await Posts.find();

            return result;
        },
        /*
         * getPosts Query
         */
        getPost: async(_: void, { id }) => {
            console.debug("Query: getPost");
            const result = await Posts.findOne({_id: id});
            const updateResult = await Posts.findOneAndUpdate({ _id: id}, { c_views: result!.get("c_views") + 1}, {new: true});

            const date = new Date(updateResult!.get("createdAt"));

            return updateResult;
        }
    },
    Mutation: {
        createPost: async (root, args) => {
            console.log("Mutation: createPost");

            const Post = new Posts({
                c_title: args.title,
                c_content: args.content,
                c_author: args.author,
            });
            
            const result = await Post.save();
            console.log(result);
            return result;
        },
        updatePost: async (root, args) => {
            console.log("Mutation: updatePost");
            
            const updateResult = await Posts.findOneAndUpdate({ _id: args.id, c_author: args.author}, { c_title: args.title, c_content: args.content }, {new: true})

            console.log(updateResult)
            if(updateResult)
                return { result: true };
            else 
                return { result: false };
        },
        deletePost: async (root, args) => {
            console.log("Mutation: deietePost");

            const result = await Posts.findOneAndDelete({ _id: args.id, c_author: args.author });
            
            console.log
            if(result)
                return { result: true };
            else 
                return { result: false };
        },
        addLikes: async (root, { id }) => {
            console.log("Mutation: addLikes");

            const result = await Posts.findOne({ _id: id });
            const likeResult = await Posts.findOneAndUpdate({ _id: id}, { c_likes: result!.get("c_likes") + 1}, {new: true})

            return likeResult; 
        },
    }
};

export default resolverMap;