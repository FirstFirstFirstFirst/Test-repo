import { useRouter } from 'next/router'


const Post = () => {
    const router = useRouter()
    const { pid , foo , bas} = router.query

    console.log("Query: ", router.query)


    return <>Post: {pid}, Foo: {foo} Bas: {bas}</>
}


export default Post;

