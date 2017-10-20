package com.example.signals.values;
public class BloodOxygenSignalValue implements SignalValue{
	public BloodOxygenSignalValue(){}
	private Integer value;
	private Long pId;
	
    @Override
    public Integer getValue() {
	return value;
	}

	@Override
	public void setValue(Integer value) {
	this.value = value;
	}

    @Override
    public Long getpId() {
    return pId;
    }

    @Override
    public void setpId(Long pId) {
    this.pId = pId;
    }

        
}
