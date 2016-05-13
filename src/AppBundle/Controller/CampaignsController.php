<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class CampaignsController extends Controller
{
    /**
     * @Route("/campaigns", name="campaigns")
     */
    public function campaignsAction(Request $request)
    {
    	//Show the page used to list user campaigns
    	return $this->render("campaigns/index.html.twig");
    }
    /**
     * @Route("/campaigns/add", name="addcampaigns")
     */
    public function addAction(Request $request){
    	//show the form used to show add form
    	return $this->render("campaigns/add.html.twig");
    }
}
