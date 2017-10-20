package com.example.services;

import com.example.dataWrappers.SignalFrequencyWrapper;
import com.example.exception.SignalException;
import com.example.exception.SignalNotFoundException;
import com.example.filters.Filter;
import com.example.signals.BloodOxygenSignal;
import com.example.signals.ECGSignal;
import com.example.signals.Signal;
import com.example.signals.values.BloodOxygenSignalValue;
import com.example.signals.values.ECGSignalValue;
import com.example.signals.values.SignalValue;



import java.util.HashMap;
import java.util.Map;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class SignalServicesImpl1 implements SignalServices{
    
    //Injeccion del filtro a usar
    //@Autowired
    //Filter filter;
    
    //Contendra un diccionario para cada tipo de senal
    Map<Long, Signal> BloodOxygenSignals=new HashMap<>();
    Map<Long, Signal> ECGSignals=new HashMap<>();
    
    @Override
    public void addSignalValue(SignalValue val, Long patientId) throws SignalException {
    	if(val instanceof BloodOxygenSignalValue){
    	if(BloodOxygenSignals.containsKey(patientId)){
    	BloodOxygenSignals.get(patientId).addValue(val);
    	}else{
    	throw new SignalException("No hay una fuente para esta senal actuelmente");
    	}
    	}
    	if(val instanceof ECGSignalValue){
    	if(ECGSignals.containsKey(patientId)){
    	ECGSignals.get(patientId).addValue(val);
    	}else{
    	throw new SignalException("No hay una fuente para esta senal actuelmente");
    	}
    	}
        //Mas ifs para mas tipos de senal
    }

    @Override
    public SignalValue getSignalValue(Long patientId, SignalValue emptyValue) throws SignalException{
        SignalValue ans=null;
        if(emptyValue instanceof BloodOxygenSignalValue){
            if(BloodOxygenSignals.containsKey(patientId)&&BloodOxygenSignals.get(patientId).getFrequency()!=null){
            	//Esta linea es para usar algun filtro
                //Signal filteredSignal=filter.filterSignal(BloodOxygenSignals.get(patientId)); //Se ejecuta el filtrado de la senal
                ans= BloodOxygenSignals.get(patientId).nextValue();
            }else{
                throw new SignalException("No hay una fuente para la senal del cliente con id :"+patientId+". O no se ha asignado una frecuencia a esta senal.");
            }
        }
        if(emptyValue instanceof ECGSignalValue){
            if(ECGSignals.containsKey(patientId)&&ECGSignals.get(patientId).getFrequency()!=null){
            	//Esta linea es para usar algun filtro
                //Signal filteredSignal=filter.filterSignal(ECGSignals.get(patientId)); //Se ejecuta el filtrado de la senal
                ans= ECGSignals.get(patientId).nextValue();
            }else{
                throw new SignalException("No hay una fuente para la senal del cliente con id :"+patientId+". O no se ha asignado una frecuencia a esta senal.");
            }
        }
        //Mas ifs para mas tipos de senal
        return ans;
    }

    @Override
    public void setSignalFrequency(Long pId, Integer frequency, SignalValue emptyValue) throws SignalException{
        
        if(emptyValue instanceof BloodOxygenSignalValue){
            if(!BloodOxygenSignals.containsKey(pId)){
                BloodOxygenSignals.put(pId, new BloodOxygenSignal());
                BloodOxygenSignals.get(pId).setFrequency(frequency);
                BloodOxygenSignals.get(pId).setpId(pId);
            }else{
                BloodOxygenSignals.get(pId).setFrequency(frequency);
                BloodOxygenSignals.get(pId).setpId(pId);
            }
        }
        if(emptyValue instanceof ECGSignalValue){
            if(!ECGSignals.containsKey(pId)){
                ECGSignals.put(pId, new ECGSignal());
                ECGSignals.get(pId).setFrequency(frequency);
                ECGSignals.get(pId).setpId(pId);
            }else{
                ECGSignals.get(pId).setFrequency(frequency);
                ECGSignals.get(pId).setpId(pId);
            }
        }
        //Mas ifs para mas tipos de senal
    }

    @Override
    public SignalFrequencyWrapper getSignalFrequency(Long pId, SignalValue firstValue) throws SignalException {
        SignalFrequencyWrapper ans = null;
        if(firstValue instanceof BloodOxygenSignalValue){
            if(BloodOxygenSignals.containsKey(pId)){
                ans=new SignalFrequencyWrapper(BloodOxygenSignals.get(pId).getFrequency(), pId);
            }else{
                throw new SignalNotFoundException("No se encontro ninguna senal de este tipo activa para el paciente con ID: "+pId);
            }
        }
        if(firstValue instanceof ECGSignalValue){
            if(ECGSignals.containsKey(pId)){
                ans=new SignalFrequencyWrapper(ECGSignals.get(pId).getFrequency(), pId);
            }else{
                throw new SignalNotFoundException("No se encontro ninguna senal de este tipo activa para el paciente con ID: "+pId);
            }
        }
        //Mas ifs para mas tipos de senal
        return ans;
    }
    
}
