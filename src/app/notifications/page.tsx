import {PageTemplate} from "@/components/templates/page.template";
import {Switch} from "@/components/ui/switch";

export default function Notifications() {
    return (
        <PageTemplate>
            <div>
                <header className={'flex items-center justify-between'}>
                    <h1>Notifications</h1>
                </header>
                <main>
                    <div>
                        <h3>Suas notificações</h3>
                        <ul>
                            <li className={'flex items-center gap-3'}>
                                <Switch/>
                                Receber notificações no email
                            </li>
                            <li className={'flex items-center gap-3'}>
                                <Switch/>
                                Receber notificações no Sistema
                            </li>
                        </ul>
                    </div>
                </main>
            </div>
        </PageTemplate>
    )
}