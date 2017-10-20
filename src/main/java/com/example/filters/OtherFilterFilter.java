package com.example.filters;
import com.example.signals.Signal;
import org.springframework.stereotype.Service;

//@Service
public class OtherFilterFilter implements Filter{

    @Override
    public Signal filterSignal(Signal signal) {
        return signal;
    }    
}
