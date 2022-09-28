import React from 'react';
import CastomLinc from "../components/CastomLinc";

const NotEoundPage = () => {
    return (
        <div>
            Страница не найдена, вернитесь на главную страницу:
            <CastomLinc to={'/'} >
                Главная
            </CastomLinc>
        </div>
    );
};

export default NotEoundPage;