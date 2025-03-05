import {SidebarTrigger} from "@/components/ui/sidebar";

interface PageTemplateProps {
    children: React.ReactNode;
}

export function PageTemplate({children}: PageTemplateProps) {
    return (
        <div className={'col-span-full'}>
            <header className={'bg-green-300 py-3 flex items-center'}>
                <SidebarTrigger/>
                name

                <div>
                    Anderson Andrade
                </div>
            </header>
            <div className={'h-full'}>
                {children}
            </div>
        </div>
    )
}