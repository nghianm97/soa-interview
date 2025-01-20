import { ModalBase } from "@/components/base/dialog-custom/ModalBase";
import UploadFileLearningModal from "@/components/modals/upload-file-learning";
import { Button } from "@/components/ui/button";
import { LaptopMinimal } from "lucide-react";
import React, { useEffect } from "react";
import ImageCropModal from "@/components/modals/image-crop-modal";
import ImageCropProvider from "@/providers/ImageCropProvider";
import { useImageCropContext } from "@/providers/ImageCropProvider";
import { readFile } from "@/helper/cropImage";

type IProps = {
  type: string;
  isOpen: boolean;
  handleClose: () => void;
};

export type IlistTypeLearningExample = {
  id: string;
  title: string;
  icon: React.JSX.Element;
  desc: string;
  type: string;
};

export default function ModalComponent(props: IProps) {
  const { type, isOpen, handleClose } = props;
  const { getProcessedImage, setImage, resetStates }: any =
    useImageCropContext();

  const onSubmit = () => {
    console.log("submit");
  };

  const handleDone = async () => {
    const avatar: any = await getProcessedImage();
    resetStates();

    const file = avatar;
    const imageDataUrl = await readFile(file);
    console.log("imageDataUrl", imageDataUrl);
  };

  const convertImageToBase64 = async (imageUrl: string) => {
    try {
      // Fetch image from URL
      const response = await fetch(imageUrl);
      const blob = await response.blob(); // Convert the response to a Blob

      // Convert the Blob to a Base64 string
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImage(base64String);
      };
      reader.readAsDataURL(blob); // Read the Blob as Data URL (Base64 string)
    } catch (error) {
      console.error("Error converting image to base64:", error);
    }
  };

  useEffect(() => {
    convertImageToBase64(
      "https://bazaarvietnam.vn/wp-content/uploads/2023/08/harper-bazaar-ten-cac-sieu-anh-hung-trong-marvel-22-e1691312027348.jpeg",
    );
  }, []);

  const dataTypeChoose: IlistTypeLearningExample = {
    id: "1",
    type: "customType",
    title: "Bài giảng",
    icon: (
      <LaptopMinimal className="w-10 h-10 rounded-full bg-green-100 p-[10px] text-green-400" />
    ),
    desc: "Định dạng PowerPoint (pptx)",
  };

  return (
    <div>
      {type === "base" ? (
        <ModalBase
          isOpen={isOpen ?? true}
          onClose={handleClose}
          title="Modal"
          className="!max-w-[850px] p-0 rounded-lg gap-0"
        >
          <hr />
          <div className="p-5">
            content...
            {/* <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=""> */}
            {/* </form>
        </Form> */}
          </div>
          <hr />
          <div className="w-full pt-6 flex justify-end mb-5 gap-3">
            <Button
              onClick={handleClose}
              variant={"buttonAdminDefault"}
              className="bg-muted rounded-md inline-flex justify-center bg-white text-black border items-center"
            >
              Huỷ
            </Button>
            <Button
              onClick={onSubmit}
              variant={"buttonStorybook"}
              className="mr-5 border-none text-white"
            >
              Lưu
            </Button>
          </div>
        </ModalBase>
      ) : null}

      {type === "importFile" ? (
        <UploadFileLearningModal
          className="w-[800px]"
          isOpen={true}
          customTitle="ảnh bìa sách"
          defaultText="Kéo và thả tệp ảnh bìa sách"
          customFileType="JPG, PNG, WEBP"
          fileSize={10 * 1024 * 1024}
          handleCloseAll={() => console.log("close")}
          dataTypeChoose={dataTypeChoose}
          handleClose={() => console.log("close")}
        />
      ) : null}

      {type === "image-crop" ? (
        <ImageCropProvider>
          <ImageCropModal
            className="w-[800px]"
            isOpen={true}
            handleDone={handleDone}
            canRotate={false}
            title={"Tải lên ảnh bìa sách"}
            handleClose={() => console.log(false)}
          />
        </ImageCropProvider>
      ) : null}
    </div>
  );
}
