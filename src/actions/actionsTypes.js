export const SHOW_TEXT = "SHOW_TEXT";

export function showText(text) {
    return {
        type: SHOW_TEXT,
        text: text
    }
}