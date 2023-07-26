import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
    if (!file) return null;

    try {
        const fileUploaded = await storage.createFile(
            process.env.NEXT_PUBLIC_BUCKET_ID!,
            ID.unique(),
            file
        );

        return fileUploaded;
    } catch (error) {
        console.log("Error uploading file:", error);
        return null;
    }

};

export default uploadImage;

