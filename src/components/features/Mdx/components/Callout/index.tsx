import {PropsWithChildren} from 'react';

export interface ICalloutProps {
    emoji: string;
}

export default function Callout(props: PropsWithChildren<ICalloutProps>) {
    return (
        <div className="my-8 flex rounded-xl bg-zinc-100/60 p-4 shadow-md dark:bg-zinc-950/50">
            <div className="mr-4 flex w-4 items-center justify-center">{props.emoji}</div>
            <div className="callout line-clamp-2 w-full overflow-hidden text-ellipsis">{props.children}</div>
        </div>
    );
}
