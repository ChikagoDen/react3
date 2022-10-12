import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getData} from "../redux/reducers/gitReducer";
import {postsErrorSelector, postsLoadingSelector, postsSelector} from "../redux/reducers/gitSelector";

const PageGit = () => {
    const  posts=useSelector(postsSelector);
    const loading=useSelector(postsLoadingSelector);
    // const error = useSelector(postsErrorSelector);
    const dispatch=useDispatch();
    useEffect(()=>{dispatch(getData())},[]);

    if (loading){
        return (
            <div>
                <h2>Идет Загрузка .... </h2>
            </div>)
    }
    // if (error!==null){
    //     return <div>
    //         <h2>ОШИБКА!!! </h2>
    //         <p>{error}</p>
    //     </div>
    // }

    return (
        <div>
            {
                posts.map((post)=>{
                    return(
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>)
                })
            }
        </div>
    );
};

export default PageGit;