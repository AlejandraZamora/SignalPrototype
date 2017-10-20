package com.example.controller;

import com.example.dataWrappers.SignalFrequencyWrapper;
import com.example.exception.SignalException;
import com.example.services.SignalServices;
import com.example.signals.values.BloodOxygenSignalValue;
import com.example.signals.values.ECGSignalValue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(value="/signal")
public class SignalController {
    
    @Autowired
    private SignalServices signalServices;
    
@MessageMapping("/frequencyBloodOxygen/{pId}")
@SendTo("/topic/BloodOxygensignaltoclient")
public SignalFrequencyWrapper sendBloodOxygensignalFrequency(@DestinationVariable Long pId, BloodOxygenSignalValue signal) throws InterruptedException, SignalException {
    return signalServices.getSignalFrequency(pId, signal);
}

@MessageMapping("/beginBloodOxygen/{pId}")
@SendTo("/topic/BloodOxygensignaltoclient")
public BloodOxygenSignalValue sendBloodOxygensignal(@DestinationVariable Long pId) throws InterruptedException, SignalException {
    return (BloodOxygenSignalValue) signalServices.getSignalValue(pId, new BloodOxygenSignalValue());
}

@MessageMapping("/saveBloodOxygen/{pId}")
@SendTo("/topic/BloodOxygensignaltoserver")
public void obtainBloodOxygensignalValue(@DestinationVariable Long pId, BloodOxygenSignalValue signal) throws SignalException{
    signalServices.addSignalValue(signal, pId);
}

@MessageMapping("/saveBloodOxygenfrequency/{pId}")
@SendTo("/topic/BloodOxygensignaltoserver")
public void setBloodOxygenSignalPatientIdnFrequency(@DestinationVariable Long pId, Integer frequency) throws SignalException{
    signalServices.setSignalFrequency(pId, frequency, new BloodOxygenSignalValue());
}
@MessageMapping("/frequencyECG/{pId}")
@SendTo("/topic/ECGsignaltoclient")
public SignalFrequencyWrapper sendECGsignalFrequency(@DestinationVariable Long pId, ECGSignalValue signal) throws InterruptedException, SignalException {
    return signalServices.getSignalFrequency(pId, signal);
}

@MessageMapping("/beginECG/{pId}")
@SendTo("/topic/ECGsignaltoclient")
public ECGSignalValue sendECGsignal(@DestinationVariable Long pId) throws InterruptedException, SignalException {
    return (ECGSignalValue) signalServices.getSignalValue(pId, new ECGSignalValue());
}

@MessageMapping("/saveECG/{pId}")
@SendTo("/topic/ECGsignaltoserver")
public void obtainECGsignalValue(@DestinationVariable Long pId, ECGSignalValue signal) throws SignalException{
    signalServices.addSignalValue(signal, pId);
}

@MessageMapping("/saveECGfrequency/{pId}")
@SendTo("/topic/ECGsignaltoserver")
public void setECGSignalPatientIdnFrequency(@DestinationVariable Long pId, Integer frequency) throws SignalException{
    signalServices.setSignalFrequency(pId, frequency, new ECGSignalValue());
}
}
