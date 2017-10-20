package com.example.signals;

import com.example.exception.SignalException;
import com.example.signals.values.SignalValue;


public interface Signal {
    /**
     * Retorna el siguiente valor de la senal
     * @return Siguiente valor de la senal (-1 si no hay ninguna fuente activa para la senal)
     * @throws SignalException 
     */
    public SignalValue nextValue() throws SignalException;
    /**
     * Encola el valor en la senal
     * @param s valor a encolar
     * @throws SignalException 
     */
    public void addValue(SignalValue s) throws SignalException;
    /**
     * Retorna la frecuencia de la senal
     * @return La frecuencia de la senal
     */
    public Integer getFrequency();
    /**
     * Asigna una frecuencia a la senal
     * @param f frecuencia a asignar
     */
    public void setFrequency(Integer f);
    /**
     * Retorna el ID de paciente al que pertenece la senal
     * @return ID de paciente al que pertenece la senal
     */
    public Long getpId();
    /**
     * Asigna el ID del paciente al que pertenece la senal
     * @param pId ID del paciente al que pertenece la senal
     */
    public void setpId(Long pId);
}
