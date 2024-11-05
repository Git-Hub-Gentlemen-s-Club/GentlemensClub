package br.com.backgentlemam.service;

import br.com.backgentlemam.dto.AddresBarberDTO;
import br.com.backgentlemam.dto.BarberShopDTO;
import br.com.backgentlemam.dto.SocialBarberDTO;
import br.com.backgentlemam.entities.BarberBranch;
import br.com.backgentlemam.entities.BarberShop;
import br.com.backgentlemam.repository.BarberShopRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.stream.Collectors;

@Service
public class BarberShopService {

    @Autowired
    private BarberShopRepository barberShopRepository;

    // Método para listar todas as barbearias
    /*
    public List<BarberShopDTO> getAllBarberShops() {
        List<BarberShop> barberShops = barberShopRepository.findAlBarberShops();
        return barberShops.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    */

    public List<BarberBranch> getAllBarberBranches() {
        return barberShopRepository.findAlBarberShops();
    }


    // Converter entidade BarberShop para DTO BarberShopDTO
    private BarberShopDTO convertToDTO(BarberShop barberShop) {
        return new BarberShopDTO(
                barberShop.getId(),
                barberShop.getName(),
                barberShop.getLogoUrl(),
                new AddresBarberDTO(
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
