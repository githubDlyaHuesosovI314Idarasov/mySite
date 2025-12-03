export interface ProjectInfo {
    id: number;
    title: string | undefined;
    shortDescription: string | undefined;
    fullDescription: string | undefined;
    primaryPhoto: string | undefined;
    secondaryPhotosList: string[] | undefined;
    tags: string[] | undefined;
    liveDemoLink: string | undefined;
    sourceCodeLink: string | undefined;
    width: number;
    height: number;

}
