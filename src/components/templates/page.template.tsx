import {SidebarTrigger} from "@/components/ui/sidebar";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList} from "@/components/ui/breadcrumb";

interface PageTemplateProps {
    children: React.ReactNode;
}

export function PageTemplate({children}: PageTemplateProps) {
    return (
        <div className={'col-span-full'}>
            <header className={'py-3 px-2 flex justify-between items-center'}>
                <div className={'flex items-center gap-3'}>
                    <SidebarTrigger/>
                    <BreadcrumbComponent/>
                </div>

                <div className={'flex items-center gap-3'}>
                    <span> Anderson Andrade </span>
                    <Avatar>
                        <AvatarFallback>AA</AvatarFallback>
                    </Avatar>
                </div>
            </header>
            <div className={'h-[90%]'}>
                {children}
            </div>
        </div>
    )
}

function BreadcrumbComponent() {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink>Home</BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}