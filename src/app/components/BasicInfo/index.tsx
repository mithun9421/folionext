import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '../commons/card';
import { Github, Linkedin, Download } from 'lucide-react';
import './styles.scss';


export default function BasicInfo() {
    return (
        <div className='flex basis-2.5/10'>
            <Card className='flex flex-col w-full mr-2'>
                <CardHeader>
                    <CardTitle>
                        <span className='text-2xl'>Hey there, its {`<Mithun />`}</span></CardTitle>
                    <CardDescription>
                        <div className='flex flex-col'>
                            <div>Sr. Frontend Engineer at PayPal</div>
                            <div className='mt-4 flex flex-row gap-2 items-center'>
                                <Github />
                                <Linkedin />
                                <button className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-xs font-medium text-white backdrop-blur-3xl">
                                        Contact
                                    </span>
                                </button>
                                <button className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-xs font-medium text-white backdrop-blur-3xl gap-1">
                                        Get Resume <Download absoluteStrokeWidth={true} height={16} width={16} />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </CardDescription>
                </CardHeader>
            </Card>
        </div>
    );
}

