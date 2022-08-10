import ThemeContext from '../../../context/themeContext'
import Counter from './Counter'
import HoverCounter from './HoverCounter'
import { useContext } from 'react'

export default function Content() {
    const context = useContext(ThemeContext);
    const { theme, switchTheme } = context;
    return (
        <div>
            <h4>content</h4>
            <Counter>
                {(count, incrementCounter) =>
                    (
                    <HoverCounter 
                        count={count} 
                        incrementCounter={incrementCounter} 
                        theme={theme} 
                        switchTheme={switchTheme} />
                )}
            </Counter>
        </div>
    )
}
