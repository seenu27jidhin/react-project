
export enum SelectedPage {

    Home = "home",
    About = "about",
    OurStore = "ourstore",
    Contact = "contact",
    Store = "store",

}

export interface AboutType{
    icon:JSX.Element;
    title:string;
    description:string;
}

export interface StoreType{
    name:string;
    description?:string;
    image:string;
}