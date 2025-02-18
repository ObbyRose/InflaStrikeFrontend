import React from 'react'
import { Card } from './ui/card';
import { Text } from './ui/text';
import { cn } from './ui/cn';

interface OutlinedCardProps {
    children: any;
    title: string;
    className?: string;
}

function OutlinedCard({ children, title, className }: OutlinedCardProps) {
    return (
        <Card variant='outline' size="lg" className={cn('border-2', className)}>
            <Text className='absolute -top-5 left-2 bg-white p-1'>{title}</Text>
            {children}
        </Card>
    )
}

export default OutlinedCard;