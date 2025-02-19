import React from 'react'
import { Card } from './ui/card';
import { Text } from './ui/text';
import { cn } from './ui/cn';

interface OutlinedCardProps {
    children: any;
    title?: string;
    className?: string;
}

function OutlinedCard({ children, title, className }: OutlinedCardProps) {
    return (
        <Card variant='filled' size="lg" className={cn('shadow-sm', className)}>
            {title && <Text className='absolute -top-4 left-2 p-1 text-[13px] font-semibold'>{title}</Text>}
            {children}
        </Card>
    )
}

export default OutlinedCard;