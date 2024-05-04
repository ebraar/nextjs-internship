import Posts from '../../../data.json'

export default function handlerId(req, res) {
    const {method,cookies,query} = req;

    const {id} = query;

    const post = Posts.posts.find(ps => ps.id == id);

    if(!post){
        res.status(404).json({message: "gönderilen id bulunamadı..."});
    }

    res.status(200).json(post);
    
    // console.log(id, "QUERY");
}