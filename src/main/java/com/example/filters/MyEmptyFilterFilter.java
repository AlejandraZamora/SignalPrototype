package com.example.filters;
import com.example.signals.Signal;
import org.springframework.stereotype.Service;

//@Service
public class MyEmptyFilterFilter implements Filter{

    @Override
    public Signal filterSignal(Signal signal) {
        return signal;
    }    
}
