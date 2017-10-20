package com.example.signals;

import com.example.exception.SignalException;
import com.example.signals.values.BloodOxygenSignalValue;
import com.example.signals.values.SignalValue;



public class BloodOxygenSignal implements Signal{
    
    private Long pId;
    private Integer frequency=null;
    private Long lastTimeAddedValue=Long.parseLong("0");
    private Integer actVal=0;
    private Integer previousVal=0;
    private Integer equalValCounter=0;

    @Override
    public SignalValue nextValue() throws SignalException{
        BloodOxygenSignalValue ans= new BloodOxygenSignalValue();
        if(pId==null||frequency==null){
            throw new SignalException("ID de Paciente o Frecuencia de Senal no definidas");
        }else{
            ans.setpId(pId);
            ans.setValue(actVal);
            if(System.currentTimeMillis()-lastTimeAddedValue>Long.parseLong("200")){
                ans.setValue(-1);
            }
        }
        return ans;
    }

    @Override
    public void addValue(SignalValue s) throws SignalException{
        if(pId==null||frequency==null){
            throw new SignalException("ID de Paciente o Frecuencia de Senal no definidas");
        }else{
            actVal=s.getValue();
            lastTimeAddedValue=System.currentTimeMillis();
        }
    }

    @Override
    public Integer getFrequency() {
        return this.frequency;
    }

    @Override
    public Long getpId() {
        return this.pId;
    }

    @Override
    public void setFrequency(Integer f) {
        this.frequency=f;
    }

    @Override
    public void setpId(Long pId) {
        this.pId=pId;
    }
    
}
