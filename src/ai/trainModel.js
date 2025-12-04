import * as tf from "@tensorflow/tfjs";

export async function trainParkingModel(slotData) {
  const xs = [];
  const ys = [];

  slotData.forEach(slot => {
    xs.push([
      slot.usageFrequency || 0,
      slot.avgOccupancySeconds || 0,
      new Date().getHours(),
      new Date().getDay()
    ]);

    ys.push(slot.isOccupied ? 1 : 0);
  });

  const inputTensor = tf.tensor2d(xs);
  const outputTensor = tf.tensor2d(ys, [ys.length, 1]);

  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 8, activation: "relu", inputShape: [4] }));
  model.add(tf.layers.dense({ units: 4, activation: "relu" }));
  model.add(tf.layers.dense({ units: 1, activation: "sigmoid" }));

  model.compile({
    optimizer: tf.train.adam(0.01),
    loss: "binaryCrossentropy",
    metrics: ["accuracy"]
  });

  await model.fit(inputTensor, outputTensor, {
    epochs: 20
  });

  return model;
}

export function predictSlot(model, slot) {
  const input = tf.tensor2d([[
    slot.usageFrequency || 0,
    slot.avgOccupancySeconds || 0,
    new Date().getHours(),
    new Date().getDay()
  ]]);

  const pred = model.predict(input).dataSync()[0];
  return pred; // retorna probabilidad 0–1
}
