import React from 'react';
import { Button, Paper, Typography } from '@material-ui/core';
import { TextsmsOutlined as MessageIcon, PersonAddOutlined as UserAddIcon } from '@material-ui/icons';

import { PostActions } from '../PostActions';

import styles from './FullPost.module.scss'

export const FullPost = () => {
    return (
        <Paper elevation={0} className={styles.paper} >
            <div style={{ margin: '0 auto', width: 680 }}>
                <Typography variant="h4" className={styles.title}>В Новой Зеландии уволили официального городского волшебника, потому что его образ «устарел» </Typography>
                <div>
                    <Typography>Он занимал должность 23 года, развлекая туристов и иностранные делегации.</Typography>
                    <Typography>Совет новозеландского Крайстчёрча уволил официального городского Волшебника, поскольку его образ «не соответствует современному облику города», сообщает Newshub.</Typography>
                    <Typography>89-летний Ян Брэкенбери Ченнелл занимал должность Волшебника 23 года. За «оказание колдовских и других услуг, подобных волшебству, в рамках рекламной работы для города Крайстчёрч» ему платили 16 тысяч новозеландских долларов в год (для сравнения, размер пенсии на одного человека в стране — 23 тысячи). Помощник исполнительного директора городского совета Линн Макклелланд сообщила, что последнюю зарплату Волшебнику выплатят в декабре, а затем контракт с ним расторгнут.</Typography>
                    <Typography>Волшебник на желание совета уволить его ответил, что «кучка бюрократов, у которых нет воображения» не имеет представления о подлинном наследии и облике города: «Я и есть оригинальный символ Крайстчёрча», — сказал он. Волшебник заявил, что расторжение контракта ничего не изменит: чиновникам придётся «убить его», чтобы заставить перестать «колдовать».</Typography>
                    <Typography>Ян Брэкенбери Ченнелл поселился в Новой Зеландии в 1970-х. До этого он служил в звании офицера ВВС Канады, преподавал литературу в Тегеранском университете. Из-за его увлечения магией мужчина долго не мог найти подходящую работу, из-за этого хобби от него ушла жена.</Typography>
                    <Typography>В Новой Зеландии Ченнелл ходил по улицам в костюме волшебника и развлекал прохожих рассказами и представлениями. В 1982 году его признали «живым произведением искусства», а в 1998 году наняли на официальную должность Волшебника города Крайстчёрч. В 2009 году ему вручили медаль «За службу Королеве» — одну из самых высоких наград Новой Зеландии.</Typography>

                    <div style={{ width: 250, marginLeft: -14 }}>
                        <PostActions />
                    </div>
                    <div className="d-flex justify-between align-center mt-30 mb-30">
                        <div className={styles.userInfo}>
                            <img
                                src="https://leonardo.osnova.io/4bd0a779-ad08-549c-94e5-adf8636bb3f0/-/scale_crop/108x108/-/format/webp/"
                                alt="Avatar"
                            />
                            <b>Яна Ломакина</b>
                            <span>+37 864</span>
                        </div>
                        <div>
                            <Button variant="contained" className="mr-15">
                                <MessageIcon />
                            </Button>
                            <Button variant="contained">
                                <UserAddIcon />
                                <b className="ml-10">Подписаться</b>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Paper>
    );
};
