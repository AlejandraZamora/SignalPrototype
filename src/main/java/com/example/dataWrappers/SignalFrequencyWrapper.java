package com.example.dataWrappers;

public class SignalFrequencyWrapper{
    private Integer frequency;
    private Long pId;

    public SignalFrequencyWrapper(Integer frequency, Long pId){
        this.frequency = frequency;
        this.pId = pId;
    }

    public Integer getFrequency(){
        return frequency;
    }

    public void setFrequency(Integer frequency){
        this.frequency = frequency;
    }

    public Long getpId(){
        return pId;
    }

    public void setpId(Long pId){
        this.pId = pId;
    }
}
