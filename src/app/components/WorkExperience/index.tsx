import React from 'react';
import './styles.scss';
import { Card, CardHeader, CardTitle } from '../commons/card';
import Timeline from '../commons/timeline';

export default function WorkExperience() {
    return (
        <div className='basis-2.5/10'>
            <Card className='mr-2 '>
                <CardHeader>
                    <CardTitle>
                        <span className='text-2xl'>Work Experience</span></CardTitle>
                </CardHeader>
                <Timeline />
            </Card>
        </div>
    );
}

