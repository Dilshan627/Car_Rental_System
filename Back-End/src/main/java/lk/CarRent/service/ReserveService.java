package lk.CarRent.service;

import lk.CarRent.dto.ReserveDTO;

import java.util.List;

public interface ReserveService {
    void saveReserve(ReserveDTO reserve);

    void updateReserve(ReserveDTO reserve);

    ReserveDTO searchReserve(String id);

    List<ReserveDTO> getAllReserves();

    List<ReserveDTO>getAppruvalReserve();
    List<ReserveDTO> findByDriverName(String name);

    String countByReserve();

    String countByActiveBooking();

}
