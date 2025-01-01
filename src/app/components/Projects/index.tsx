import React from 'react';
import './styles.scss';
import { Card, CardHeader, CardTitle } from '../commons/card';

export default function Projects() {
    return (
        <div className='flex basis-7.5/10'>
            <Card>
                <CardHeader>
                    <CardTitle>Projects</CardTitle>
                </CardHeader>
            </Card>
        </div>
    );
}

