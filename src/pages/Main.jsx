import Layout from "../components/Layout";


export function Main () {
    return <>
        <h1>Главная страница</h1>
        <Layout mb={1} dt={2} gap="small"/>
        <Layout mb={2} dt={4}/>
        <Layout mb={2} dt={3}/>
    </>
}