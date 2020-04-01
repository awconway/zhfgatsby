import React from 'react'
import rehypeReact from 'rehype-react'

import Exercise from './components/exercise'
import { Link } from './components/link'
import Slides from './components/slides'
import { H3, Hr, Ol, Ul, Li } from './components/typography'
import { qu } from './components/qu'


export const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
        exercise: Exercise,
        slides: Slides,
        a: Link,
        hr: Hr,
        h3: H3,
        ol: Ol,
        ul: Ul,
        li: Li,
        qu: qu,
    },
}).Compiler
