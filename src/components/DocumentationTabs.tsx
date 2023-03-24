'use client'

import { nodejs, python } from '../helpers/documentation-code'
import { FC } from 'react'
import Code from './Code'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/Tabs'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

const DocumentationTabs: FC = () => {
    return (
        <Tabs>
            <TabsList defaultValue={'nodejs'} className='max-w-2xl w-full'>
                <TabsTrigger value='nodejs'>NodeJS</TabsTrigger>
                <TabsTrigger value='python'>Python</TabsTrigger>
            </TabsList>
            <TabsContent value='nodejs'>
                <SimpleBar>
                    <Code animated langauge='javascript' code={nodejs} show />
                </SimpleBar>
            </TabsContent>
            <TabsContent value='python'>
                <SimpleBar>
                    <Code animated langauge='javascript' code={python} show />
                </SimpleBar>
            </TabsContent>
        </Tabs>
    )
}

export default DocumentationTabs
