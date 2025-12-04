// predictAllSlots.js
import { predictSlot } from "./trainModel";

export function predictAllSlots(model, slots) {
  return slots.map(slot => {
    const prob = predictSlot(model, slot);
    return {
      id: slot.id,
      prediction: prob
    };
  });
}
