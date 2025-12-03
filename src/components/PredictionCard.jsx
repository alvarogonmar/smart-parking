import React, { useEffect, useState } from "react";
import { trainParkingModel, predictSlot } from "../ai/trainModel";

function PredictionCard({ slots }) {
