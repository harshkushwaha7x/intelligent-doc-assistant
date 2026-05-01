import { atom } from "recoil";

export interface Message {
    content: string;
    sentBy: 'User' | 'Bot';
    isHistory?: boolean;
}

interface DocumentData {
    documentName: string | null;
    documentId: string | null;
}

type SidebarOptionType = 'home' | 'fav' | 'doc';

interface SidebarOption {
    option: SidebarOptionType;
}


export const loggedInUserName = atom<string>({
    key:"loggedInUserName",
    default:""
})

export const activeDocumentData = atom<DocumentData>({
    key:"activeDocumentData",
    default:{documentId:null,documentName:null}
})

export const sidebarOpen = atom<boolean>({
    key:"sidebarOpen",
    default:true
})

export const messages = atom<Message[]>({
    key:"messages",
    default:[]
})

export const searchResult = atom<unknown>({
    key:'searchResult',
    default:null
})

export const isAIResultLoading = atom<boolean>({
    key:'isAIResultLoading',
    default:false
})

export const activeDocumentId = atom<string | null>({
    key:'activeDocumentId',
    default:null
})

export const isContentModalOpen = atom<boolean>({
    key:"isContentModalOpen",
    default:false
})

export const isFileSelected = atom<File | null>({
    key:"isFileSelected",
    default:null
})

export const isDeleteModalOpen = atom<boolean>({
    key:"isDeleteModalOpen",
    default:false
})

export const activeSidebarOption = atom<SidebarOption>({
    key:"activeSidebarOption",
    default:{option:'home'}
})

export const showIsArchivedDocuments = atom<boolean>({
    key:"showIsArchivedDocuments",
    default:false
})

export const isHistoryLoading = atom<boolean>({
    key:"isHistoryLoading",
    default:true
})


