<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
    	//try to get active campaign, if exists redirect to it, else redirect to campaign page
    	$campaign = $this->getDoctrine()->getRepository("AppBundle:Campaign")->findOneBy(array(
    			'active' => true
    	));
    	
    	if ($campaign != null){
    		return $this->redirectToRoute("manager", array("campaign_id" => $campaign->getId()));
    	}
    	
    	return $this->redirectToRoute("campaigns");
    }
}
