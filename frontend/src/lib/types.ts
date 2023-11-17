export const enum FieldType {
    RANGE = "range",
    SEED = "seed",
    TEXTAREA = "textarea",
    CHECKBOX = "checkbox",
}
export const enum PipelineMode {
    IMAGE = "image",
    VIDEO = "video",
    TEXT = "text",
}

export interface FieldProps {
    default: number | string;
    max?: number;
    min?: number;
    title: string;
    field: FieldType;
    step?: number;
    disabled?: boolean;
    hide?: boolean;
    id: string;
}
export interface PipelineInfo {
    name: string;
    description: string;
    input_mode: {
        default: PipelineMode;
    }
}