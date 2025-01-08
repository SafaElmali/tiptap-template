import { UploadDropzone as BaseUploadDropzone } from "@uploadthing/react";
import { cn } from "@/lib/utils";
import type { UploadDropzoneProps } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";

export const UploadDropzone = ({
  className,
  ...props
}: UploadDropzoneProps<OurFileRouter, "imageUploader">) => (
  <BaseUploadDropzone
    {...props}
    className={cn(
      "bg-muted/50 border-2 border-dashed border-muted-foreground/25 hover:border-muted-foreground/50 dark:hover:border-muted-foreground/50 ut-label:text-lg ut-allowed-content:text-muted-foreground ut-button:ut-uploading:cursor-not-allowed ut-button:bg-primary ut-button:text-primary-foreground ut-button:hover:bg-primary/90",
      className
    )}
    config={{
      mode: "auto",
      appendOnPaste: true,
    }}
  />
); 