import { MenuLogin } from './menu/MenuLogin';

async function main() {
    const menuLogin = new MenuLogin();
    await menuLogin.iniciar();
}

main().catch(console.error); 