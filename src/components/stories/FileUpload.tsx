import FileUpload from "@/components/admin/list-question/FileUpload";
import { Card, CardContent } from "@/components/ui/card";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import ButtonDriverPicker from "@/components/base-component/button-driver-picker";
import ReactOneDriveFilePicker from "@/components/base-component/button-one-drive-picker";
import { UploadIcon } from "lucide-react";
import ButtonUploadFile from "@/components/base-component/button-upload-file";

export const GOOGLE_DRIVE_CLIENT_ID =
  "315314856127-smb6p7urql99g8q5i1fn81d0robhqo0s.apps.googleusercontent.com";

export const ONE_DRIVE_CLIENT_ID = "b000c343-d081-4bef-9160-b520d70875e6";

export default function FileUploadComponent({ type }: { type: string }) {
  const [, setFileUpload] = useState<any>();

  const handleFilesUploaded = async (files: any) => {
    console.log("files", files);
  };
  const handleFileChange = async (e: any) => {
    const files = e.target.files; // Get the selected file(s)
    console.log("files123", files);
  };

  return (
    <>
      {type === "custom" ? (
        <Card className="w-[1000px]">
          <CardContent className="p-6 w-full">
            <FileUpload
              onFilesUploaded={handleFilesUploaded}
              acceptedFileTypes={{
                "image/jpeg": [".jpg", ".jpeg"],
                "image/png": [".png"],
              }}
              maxSize={50 * 1024 * 1024} // 10MB
              otherText="Tối đa: 50MB"
              type="image"
            />
          </CardContent>
        </Card>
      ) : null}

      {type === "base" ? (
        <div>
          <Input
            id="picture"
            type="file"
            className="w-[500px]"
            variant={"file"}
            onChange={handleFileChange}
          />
        </div>
      ) : null}

      {type === "button-upload" ? (
        <div className="col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-4 2xl:col-span-4">
          <ButtonUploadFile
            className="bg-gray-200 text-black text-base font-semibold rounded-xl hover:bg-gray-300 h-[48px] w-full"
            setFileUpload={setFileUpload}
            icon={<UploadIcon className="w-4 h-4 mr-2" />}
            accept="video/*"
            text="Tải lên từ thiết bị"
          />
        </div>
      ) : null}

      {type === "gg-drive" ? (
        <ButtonDriverPicker setFileUpload={setFileUpload} />
      ) : null}

      {type === "one-drive" ? (
        <ReactOneDriveFilePicker
          clientID={ONE_DRIVE_CLIENT_ID}
          multiSelect={false}
          onSuccess={() => console.log("123")}
          action="share"
        />
      ) : null}
    </>
  );
}
