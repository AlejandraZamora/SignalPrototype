package com.example.services;

import com.example.dataWrappers.SignalFrequencyWrapper;
import com.example.exception.SignalException;
import com.example.signals.values.SignalValue;


public interface SignalServices {
    public void addSignalValue(SignalValue val, Long patientId) throws SignalException;
    public SignalValue getSignalValue(Long patientId, SignalValue emptyValue) throws SignalException;
    public void setSignalFrequency(Long pId, Integer frequency, SignalValue emptyValue) throws SignalException;
    public SignalFrequencyWrapper getSignalFrequency(Long pId, SignalValue firstValue) throws SignalException;
}
