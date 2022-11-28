import {SET_SUBJECTS_LIST} from './actions'
import {Image, Text} from "react-native";
import SubjectClass from "../components/SubjectClass";
import LessonClass from "../components/LessonClass";
import TopicClass from "../components/TopicClass";

const initialState = {
    subjectsList: [new SubjectClass(require('../images/math.png'), "Математика",
        [new LessonClass(require('../images/greenRectangle.png'), "Урок 1", "Что такое дроби?", require('../images/subjectImages/questions.png'),
            [new TopicClass(1, [<Text>Обычный текст</Text>])]),
            new LessonClass(require('../images/blueRectangle.png'), "Урок 2", "Сравнение дробей", require('../images/subjectImages/comprasion.png'),
                [new TopicClass(1, [<Text>Новый текст</Text>, <Text>Больше текста</Text>,
                    <Text>ЕЩЁ БОЛЬШЕ ТЕКСТА ЕЩЁ БОЛЬШЕ ТЕКСТА ЕЩЁ БОЛЬШЕ ТЕКСТА ЕЩЁ БОЛЬШЕ ТЕКСТА ЕЩЁ БОЛЬШЕ ТЕКСТА ЕЩЁ
                        БОЛЬШЕ ТЕКСТА ЕЩЁ БОЛЬШЕ ТЕКСТА ЕЩЁ БОЛЬШЕ ТЕКСТА ЕЩЁ БОЛЬШЕ ТЕКСТА </Text>,
                    <Text>Огромное Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное
                        Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество
                        ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное
                        Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество
                        ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное
                        Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество
                        ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное
                        Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество
                        ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное
                        Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество
                        ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное
                        Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество
                        ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное
                        Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество
                        ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное
                        Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество
                        ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное
                        Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество
                        ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное
                        Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество
                        ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное
                        Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество
                        ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное
                        Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество ТЕКСТА Огромное Количество
                        ТЕКСТА Огромное Количество ТЕКСТА</Text>]), new TopicClass(2, [<Image
                    style={{width: 360, height: 200}} source={require('../images/cat.png')}/>]),
                    new TopicClass(3, [<Image source={require('../images/castle.png')}/>,
                        <Text>Последний текст</Text>])]),
            new LessonClass(require('../images/blueRectangle.png'), "Урок 3", "Сложение и вычитание дробей", require('../images/subjectImages/sum.png'), []),
            new LessonClass(require('../images/blueRectangle.png'), "Урок 4", "Умножение и деление дробей", require('../images/subjectImages/separate.png'), [])]),
        new SubjectClass(require('../images/biology.png'), "Биология", [])]
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SUBJECTS_LIST:
            return {...state, subjectsList: action.payload}
        default:
            return state
    }
}

export default userReducer;

//  [
//      [SubjectBlock, subjectName,
//          [
//              [LessonBlock, topicsCount,
//                  [
//                      [TopicBlock, content],
//                      [TopicBlock, content]
//                  ]
//              ],
//              [LessonBlock, topicsCount,
//                  [
//                      [TopicBlock, content],
//                      [TopicBlock, content]
//                  ]
//              ]
//          ]
//      ],
//      [SubjectBlock, subjectName,
//          [
//              [LessonBlock, topicsCount,
//                  [
//                      [TopicBlock, content],
//                      [TopicBlock, content]
//                  ]
//              ],
//              [LessonBlock, topicsCount,
//                  [
//                      [TopicBlock, content],
//                      [TopicBlock, content]
//                  ]
//              ]
//          ]
//      ]
// ]