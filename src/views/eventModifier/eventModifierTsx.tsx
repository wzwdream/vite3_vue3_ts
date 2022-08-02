import { withModifiers } from 'vue'
import './index.scss'
export default defineComponent({
    name: 'eventModifierTsx',
    setup() {
        const clickBox = (val: any) => {
            console.log(val)
        }
        return () => (
            <el-card shadow="hover" header="TSX语法">
                <p>tsx语法的事件绑定与模板语法略微有些不同，事件绑定使用 `onClick={'{}'}`这样的格式，而事件的修饰符需要借助 `withModifiers`，或者自己用原生js的方法实现</p>
                <div class={'box1'} onClick={() => clickBox('box1')}>
                    <span>我是box1</span>
                    <div class={'box2'} onClick={() => clickBox('box2')}>
                        <span>我是box2</span>
                        <div class={'box3'} onClick={withModifiers(() => clickBox('box3'), ['stop'])}>我是box3</div>
                    </div>
                </div>
            </el-card>
        )
    }
})