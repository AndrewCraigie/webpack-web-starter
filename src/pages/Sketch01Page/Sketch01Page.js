import React from 'react'

import AppStateProvider from "../../App/AppStateProvider/AppStateProvider";

import Sketch01Controls from '../../components/Sketch01Controls/Sketch01Controls'
import Sketch01View from '../../components/Sketch01View/Sketch01View'
import Section3 from '../../components/Section3'

export default function Sketch01Page() {
    return (
        <AppStateProvider>
        <>
            <div className="app-content section">
                <h5>App content</h5>

                <Sketch01View />
                <Sketch01Controls />
                {/*<Section3 />*/}
            </div>
        </>
        </AppStateProvider>
    )
}
