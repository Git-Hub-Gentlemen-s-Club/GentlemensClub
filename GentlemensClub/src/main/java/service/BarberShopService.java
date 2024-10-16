package service;

import dto.AddressBarberDTO;
import dto.BarberShopDTO;
import dto.SocialBarberDTO;
import entities.BarberShop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repository.BarberShopRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BarberShopService {

    @Autowired
    private BarberShopRepository barberShopRepository;

    // Método para listar todas as barbearias
    public List<BarberShopDTO> getAllBarberShops() {
        List<BarberShop> barberShops = barberShopRepository.findAll();
        return barberShops.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    // Converter entidade BarberShop para DTO BarberShopDTO
    private BarberShopDTO convertToDTO(BarberShop barberShop) {
        return new BarberShopDTO(
                barberShop.getId(),
                barberShop.getName(),
                barberShop.getLogoUrl(),
                new AddressBarberDTO(
                        barberShop.getAddress().getId(),
                        barberShop.getAddress().getStreet(),
                        barberShop.getAddress().getNumber(),
                        barberShop.getAddress().getComplement(),
                        barberShop.getAddress().getNeighborhood(),
                        barberShop.getAddress().getZipCode(),
                        barberShop.getAddress().getCity(),
                        barberShop.getAddress().getState(),
                        barberShop.getAddress().getLocation(),
                        barberShop.getAddress().getBranchId()),
                barberShop.getGoogleMapsLink(),
                new SocialBarberDTO(
                        barberShop.getSocial().getId(),
                        barberShop.getSocial().getInstagram(),
                        barberShop.getSocial().getFacebook(),
                        barberShop.getSocial().getLinkedin(), // Corrigido para pegar LinkedIn
                        barberShop.getSocial().getTiktok(), // TikTok incluído corretamente
                        barberShop.getSocial().getYoutube(), // YouTube incluído corretamente
                        barberShop.getSocial().getWebsite(), // Incluído website
                        barberShop.getSocial().getBranchId()),
                barberShop.getWhatsappNumber());
    }
}
