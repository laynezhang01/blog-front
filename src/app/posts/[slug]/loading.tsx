import UfoIcon from '/assets/icons/ufo.svg';

export default function PostSkeleton() {
    return (
        <div className="relative mt-16 min-h-screen lg:mt-32">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-pulse text-9xl text-zinc-500/50">
                    <UfoIcon />
                </div>
            </div>
        </div>
    );
}
