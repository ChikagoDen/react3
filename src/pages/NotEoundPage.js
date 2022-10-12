import React from 'react';
import CustomLinc from "../components/CastomLinc";

const NotFoundPage = () => {
    return (
        <div>
            Страница не найдена, вернитесь на главную страницу:
            <CustomLinc to={'/'} >
                Главная
            </CustomLinc>
        </div>
    );
};

export default NotFoundPage;