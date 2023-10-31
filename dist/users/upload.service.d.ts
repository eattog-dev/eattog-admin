import { S3 } from 'aws-sdk';
export declare class UploadService {
    s3: S3;
    uploadFile(file: any): Promise<string>;
    s3Upload(file: any, bucket: any, name: any, mimetype: any): Promise<string>;
}
